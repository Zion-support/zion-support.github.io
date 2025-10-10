
async function submitByEmail(to: string;)
  subject: string)
  text: string)
  attachments: unknown[] = []
) {
  //   const host = process.env.EMAIL_HOST;
  //   const port = Number(process.env.EMAIL_PORT || 587);
  //   const user = process.env.EMAIL_USER;
  //   const pass = process.env.EMAIL_PASS;
  //   const from = process.env.EMAIL_FROM || user;
,
  if (!host || !user || !pass) {,
    throw new Error('Email not configured');
  }

  const transporter = nodemailer.createTransporter({)
    host)
    port)
    secure: port === 465),
    auth: { user, pass })
  });

  await transporter.sendMail({)
    from)
    to)
    subject)
    text)
    attachments)
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') {,
    return res.status(405).json({ error: 'Method not allowed' });
async function submitByEmail(t,
  o: string,
  subjec,
  t: string,
  tex,
  t: string,
  attachment,
  s: unknown[] = [])
  }

  h: { user, pass })
  });

  });
}

  q: NextApiRequest, re)
  r: 'Method not allowed' });
  }

    const { id, channels = ['email'], emailTo, delegateNote } = req.body || {};

  r: 'Proposal ID required' });
    }

    const _meta = getProposal(id);
  r: 'Proposal not found' });
    }

    // Email submission;
    if (channels.includes('email')) {
      //       const to = emailTo || process.env.UN_GATEWAY_EMAIL || 'example@un.org';
      //       const subject = `[Proposal] ${meta.title} - ${meta.targetInstitution}`;
      //       const subject = `[Proposal] ${meta.title} - ${meta.targetInstitution}`;`
      const text = `Please find the proposal attached.

Titl,
  e: ${meta.title}
Targe,
  t: ${meta.targetInstitution}
Typ,
  e: ${meta.type}
Regio,
  n: ${meta.regionalScope}
Budget/Resolutio,
  n: ${meta.budgetOrResolution}

DAO Governance: See document.,
,
Delegate Note: ${delegateNote || 'N/A'}`;
DAO,
  Governance: See document.

Delegate,`
  Note: ${delegateNote || 'N/A'}`;

      await submitByEmail(to, subject, text);
    }

    // ENS record hash (default: compute and store hash only)
    let ensRecordHash: string | undefined;
    try {,
      const _hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest('hex');
      ensRecordHash = `0 x${hash}`;
      updateArtifacts(id, { ensRecordHash });
    } catch {
      // ignore;
    }

    const updated = updateProposalMeta(id, m => ({)
      ...m)
      status: 'Submitted')}));

    return res.status(200).json({ meta: updated });
  } catch (error: unknown) {,
    return res.status(500).json({ error: error?.message || 'Submission failed' });
    // ENS record hash (defaul)
  t: compute and store hash only)
    let,
  ensRecordHash: string | undefined;
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash });
    }

    }));

  a: updated });
  } catch (erro)
  r: error?.message || 'Submission failed' });
  }
}
`