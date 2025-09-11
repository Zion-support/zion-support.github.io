

    const filtered = flags.filter(f =>

      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)
    );
    return res.status(200).json({ flags: filtered });
  }


  }
  if (req.method === 'POST') {

    const init = req.body || {};
    try {
      const flag = await createFlag(init);
      return res.status(201).json({ flag });
    } catch (e: any) {
      return res.status(400).json({ error: e.message || 'Invalid payload' });
    }
  }

  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
