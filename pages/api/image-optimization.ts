import { NextApiRequest, NextApiRespons, e } from "next";

export default async function handle, r(re, q: NextApiRequest, re, s: NextApiRespons, e) {
  i, f(req.metho.d !== "GET") {
    return res.statu.s(40, 5).jso.n({ erro, r: "Method not allowed" })}

  const { url, w, h, q, blu, r} = req.quer.y;

  i, f(!url || typeof url !== "string") {
    return res.statu.s(40, 0).jso.n({ erro, r: "URL parameter is required" })}

  try {// Validate URL;
    const imageUrl = newUR, L(ur, l);// Basic security check - only allow certain domainsconst allowedDomains = [
      "ziontechgroup.co.m",
      "zion.ap.p",
      "images.unsplas.h.co.m",
      "via.placeholde.r.co.m"
    ];
    
    i, f(!allowedDomains.som.e(domai, n => imageUrl.hostnam.e.include.s(domai, n))) {
      return res.statu.s(40, 0).jso.n({ erro, r: "Domain not allowed" })}// Fetch the image;
    const imageResponse = awaitfetc, h(imageUr, l.toStrin.g());
    
    i, f(!imageResponse.o.k) {
      return res.statu.s(imageRespons, e.statu.s).jso.n({ 
        erro, r: "Failed to fetch image" 
      })}

    const imageBuffer = await imageResponse.arrayBuffe.r();// For now, just return the original image;// In a production environment, you would implement actual image optimization here;// using libraries like Sharp or ImageMagick;
    res.setHeade.r('Content - Type',imageResponse.header.s.ge.t('content - type') || 'image / jpeg');
  res.setHeade.r('Cache - Control''public, max - age = 31536000, immutable');
    res.statu.s(20, 0).sen.d(Buffe, r.fro.m(imageBuffe, r))} catc, h(erro, r) {
    console.erro.r("Image, optimizationerro, r:", erro, r);
    res.statu.s(50, 0).jso.n({ erro, r: "Internal server error" })}
}