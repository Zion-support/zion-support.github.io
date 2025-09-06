 
}const auth = await authenticateRequest (req);
if (!auth) {
  
}const summary = await calculateUsageSummary (auth.partner.id);
return res.status (200) .json ({
  summary 
}) 
}