# Site Integrity Check — 2026-11-18 11:58 (UTC-03)
Repo: /Users/miami2/zion-support/zion-support.github.io · Scripts: /Users/miami2/zion.app/automation

## CHECKS
Checagem foi feita com 3 scripts:
- _fresh_site_integrity_check.py → live HTTP probe + repo cross-check + sitemap check
- check_zion_routes.py → 8 routes, status/title/canonical/H1
- deep_route_check.py → deep verification of the 7 key routes (app-router error marker scan)

### Live HTTP probe (8/8 routes 200)
- /                        200  69,555B
- /public-roadmap          200  888B
- /status-page             200  792B
- /use-cases               200  1,145B
- /solutions/healthcare    200  2,636B
- /industries/financial-services 200  3,061B
- /free-consultation       200  1,098B
- /tools/phishing-analyzer 200  4,221B

### Repo cross-check (local public/ vs live)
IN SYNC para todos: /public-roadmap, /status-page, /use-cases,
/solutions/healthcare, /industries/financial-services,
/free-consultation, /tools/phishing-analyzer
sha1(first 2KB) dos arquivos locais = sha1 do conteúdo vivo.

### Canonical URL check
Todos 8 correspondem ao canonical final (com slug finalizando /).

### App-router / 404 marker scan (deep_route_check.py)
Nenhum marker ("Not a package", "404", "Under construction", "apiGateway") nos 7 rotas.

## FIXES
Nenhum fix necessário. Todos os endpoints retornam 200, são end-to-end
sincronizados com o repositório local e não apresentam erros de roteamento.

## RESULTS
- 8/8 rotas HTTP 200
- 7/7 rotas em sincronia com repo
- Canonicals 8/8 corretos
- Sitemaps: /sitemap.xml é sitemapindex → sitemap-0.xml. As 7 rotas não constam
  de sitemap (intencional: possuem <meta name="robots" content="noindex, follow">
  e redirecionamento canonical — não são páginas catalogue canónica).

## NOTAS
- O /public-roadmap e /status-page são páginas de substituição/redirecionamento
  (meta refresh → /heritage/ e /status/, respectivamente).
- /free-consultation redireciona para o Free Discovery (book).
- O /tools/phishing-analyzer é a página de ferramenta interativa (pt-BR).
- Sincronia repo↔live confirmada por hash. Sem ações de fixo.
