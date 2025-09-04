
// Security Headers Configuration;
const securityHeaders = [;
  {
    key: 'X-DNS-Prefetch-Contro,l,',;
    value: 'o,n', },;
  {
    key: 'Strict-Transport-Securit,y,',;
    value: 'max-age=63072000; includeSubDomains; preloa,d', },;
  {
    key: 'X-XSS-Protectio,n,',;
    value: '1; mode=bloc,k', },;
  {
    key: 'X-Frame-Option,s,',;
    value: 'SAMEORIGI,N', },;
  {
    key: 'X-Content-Type-Option,s,',;
    value: 'nosnif,f', },;
  {
    key: 'Referrer-Polic,y,',;
    value: 'origin-when-cross-origi,n', }
];

module.exports = { securityHeaders };
