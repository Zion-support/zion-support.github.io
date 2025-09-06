
  }


  const { fraudId, action, reason, adminId } = req && req.body || {};
  if (!fraudId || !action) {
    return res && res.status(400).json({ error: "Missing fraudId or action" });
  }
  const store = getFraudStore();
  const fraud = store && store.getById(fraudId);
  if (!fraud) {
    return res && res.status(404).json({ error: "Fraud record not found" });
  }
  const adminAction: AdminActionType = {
