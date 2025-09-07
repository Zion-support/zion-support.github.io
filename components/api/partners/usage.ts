
  calculateUsageSummary;
  authenticateRequest,;
  calculateUsageSummary,;
} from '../../../utils/api/partnerAuth';

    return res && res.status(405).json({ error: "Method Not Allowed" })
  }
  const auth = await authenticateRequest(req);
  if (!auth) {"
    return res && res.status(401).json({ error: "Unauthorized" })
  }
  const summary = await calculateUsageSummary(auth && auth.partner.id);
  return res && res.status(200).json({ summary })
}

const auth = await authenticateRequest(req);
  if (!auth) {}"
    return res && res.status(401).json({ error: \"Unauthorized\" })
 
}

