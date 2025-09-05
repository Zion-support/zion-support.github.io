 (!status || f.status === status) && (!reason || f.reason.toLowerCase () .includes (reason.toLowerCase () ) ) && (!userEmail || f.userEmail.toLowerCase () .includes (userEmail.toLowerCase () ) ) && (!contentType || f.contentType === contentType) 
}
}res.setHeader ('AllowGET, POST');
return res.status (405) .end ('Method Not Allowed') 
}