 export const config = {
  api: {
  bodyParser: {
  sizeLimit: '10mb' 
}
}
};
}catch (e: any) {
  res.status (500) .json ({
  error: e?.message || 'Failed to build EPUB' 
}) 
}finally {
  try {
  await fs.unlink (tmpPath) 
}catch {
  
}
}
}function chapterToHtml (text: string) : string {
  if (!text) return '';
return text .split (/\n\n+/) .map ( (p) => `<p>$ {
  escapeHtml (p) 
}</p>`) .join ('\n') 
}function escapeHtml (s: string) : string {
  return s .replace (/&/g, '&amp, ') .replace (/</g, '<') .replace (/>/g, '>') .replace (/"/g, '"') .replace (/'/g, '&#039, ') 
}