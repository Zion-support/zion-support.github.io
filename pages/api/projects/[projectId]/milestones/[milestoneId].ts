 (status === 'In Progress' && isClientUser) || (status === 'Submitted' && isTalentUser) || (status === 'Approved' && isClientUser) || (status === 'Paid' && isClientUser);
if (!allowed && user.role !== 'admin') {
  
}res.setHeader ('AllowPATCH');
res.status (405) .end ('Method Not Allowed') 
}