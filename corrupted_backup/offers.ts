
}
}const offer: Offer = {
  id: uuidv4 ();
createdAtIso: new Date () .toISOString ();
clientId: client.id;
talentSlug;
startDateIso;
scopeSummary;
paymentTerms: paymentTerms as PaymentTerms;
agreementUrl;
saveOffer (offer);
return res.status (201) .json ({
  ok: true, offer 
}) 
}if (req.method === "PATCH") {
  // Update offer: accept or request changes id: uuidv4 (), title: `Project with $ {
  existing.talentSlug 
}`;
summary: existing.scopeSummary;
clientId: existing.clientId;
talentSlug: existing.talentSlug;
startDateIso: existing.startDateIso;
status: "ACTIVE";
timeline: existing.paymentTerms.type === "milestone" ? existing.paymentTerms.milestones || [] : [];
documents: existing.agreementUrl ? [ saveOffer (existing);
return res.json ({
  ok: true, offer: existing 
});
}if (action === "decline") {
  if (user.role !== "talent") return bad (res, "Only talent can decline", 403);
existing.status = "DECLINED";
saveOffer (existing);
return res.json ({
  ok: true, offer: existing 
});
}return bad (res, "Unknown action");
}
}
}

