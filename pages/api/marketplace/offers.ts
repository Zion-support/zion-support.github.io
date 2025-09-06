import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth";
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store";
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";
function bad(res: NextApiResponse, message: string, code;
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
          timeline:
            existing.paymentTerms.type === "milestone"
              ? existing.paymentTerms.milestones |[]
              : []
          documents: existing.agreementUrl
            ? [
                {
                  id: uuidv4()
                  name: "Agreement"
                  url: existing.agreementUrl
                  uploadedAtIso: new Date().toISOString()
                }
              ]
            : [],
          notes: [],
        };
        saveProject(project);
        existing.projectId = project.id;
        saveOffer(existing);
return res.json({ ok: true, offer: existing, project });
      }

      if (action === 'request_changes') {
        if (user.role !== 'talent')
          return bad(res, 'Only talent can request changes', 403);
        existing.status = 'CHANGES_REQUESTED';
        existing.changeRequestNote = changeRequestNote || '';
        saveOffer(existing);
        return res.json({ ok: true, offer: existing });
      }

      if (action === 'decline') {
        if (user.role !== 'talent')
          return bad(res, 'Only talent can decline', 403);
        existing.status = 'DECLINED';
        saveOffer(existing);
        return res.json({ ok: true, offer: existing });
      }

      return bad(res, 'Unknown action');
    }

    return bad(res, 'Method not allowed', 405);
  } catch (e: any) {
    const status = e?.statusCode || 500;
    return res
      .status(status)
      .json({ ok: false, error: e?.message || 'Server error' });
  }

}}
  }
}
