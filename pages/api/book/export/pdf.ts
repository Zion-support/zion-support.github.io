 bodyParser: {
  sizeLimit: '10mb' 
}
}
};
}catch (e: any) {
  try {
  await browser.close () 
}catch {
  
}res.status (500) .json ({
  error: e?.message || 'Failed to render PDF' 
}) 
}
}