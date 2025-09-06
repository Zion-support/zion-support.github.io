 
}try {
  const certifications = (await fs.pathExists (CERTS FILE) ) ? await fs.readJSON (CERTS FILE) : [];
return res.status (200) .json ({
  certifications 
}) 
}catch (e) {
  
}
}