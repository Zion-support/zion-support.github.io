# SEO Meta Tag Fixes — ziontechgroup.com

## Instructions for agent-dev
Apply these meta tag improvements to the HTML templates in zion-support.github.io.
After editing, commit and push to deploy.

---

### Pages with SHORT TITLES (<30 chars) — expand to 40-60 chars

| URL | Current Title (chars) | Suggested Title |
|-----|----------------------|-----------------|
| /contact/ | Contact | Zion Tech Group (25) | Contacte a Zion Tech Group — AI e Automação |
| /blog/ | Blog — Zion Tech Group (22) | Blog — AI, Automação e TI para Empresas | Zion |
| /growth/ | Growth | Zion Tech Group (24) | Crescimento e Automação para PMEs — Zion Tech Group |
| /discovery/ | Discovery | Zion Tech Group (27) | Discovery $99 — Diagnóstico AI/IT em 7 Dias |
| /case-studies/ | Case Studies | Zion Tech Group (30) | Casos de Sucesso — AI e Automação que Funcionam |
| /enterprise/ | Enterprise | Zion Tech Group (28) | Enterprise AI e Automação para Grandes Empresas |
| /consulting/ | Consulting | Zion Tech Group (28) | Consultoria AI e TI — Roadmap e Implementação |
| /marketplace/ | Marketplace | Zion Tech Group (29) | Marketplace de Ferramentas AI e Automação |
| /partners/ | Partners | Zion Tech Group (26) | Programa de Parceiros AI — Co-venda e Receita |
| /ai-services/ | AI Services — Zion Tech Group (29) | Serviços de AI e Automação para Empresas |
| /privacy/ | Privacy — Zion Tech Group (25) | Política de Privacidade — Zion Tech Group |
| /industries/ | Indústrias — Zion Tech Group (28) | Indústrias Transformadas por AI — Fintech, Saúde, Logística |
| /affiliate/ | Affiliate · Zion Tech Group (27) | Programa de Afiliados — AI e Automação |
| /managed-it-services/ | Managed IT · Zion Tech Group (28) | Managed IT Services — Suporte 24/7 para AI e Cloud |
| /it-consulting/ | IT consulting · Zion Tech Group (28) | Consultoria em TI e AI — Estratégia e Implementação |

---

### Pages with MISSING or SHORT DESCRIPTIONS (<120 chars)

| URL | Current (chars) | Suggested Description (120-160 chars) |
|-----|-----------------|--------------------------------------|
| /services/ | 106ch | Serviços completos de AI e TI para empresas: cloud, segurança, dados, IoT, blockchain. Do diagnóstico à operação contínua. |
| /pricing/ | 112ch | Planos transparentes de AI e automação: Discovery $99, Consulting $499, Starter $2.500, Growth $8.000/mês. |
| /contact/ | 86ch | Fale com a Zion Tech Group. Consultoria AI, automação, cloud e cybersecurity. Resposta em até 24h. |
| /growth/ | 85ch | Crescimento para PMEs: outbound, parcerias, conteúdo e automação. Ação proativa, sem projeto eterno. |
| /discovery/ | 88ch | Discovery $99 — Diagnóstico de processo AI/IT em até 7 dias. Mapa, relatório e sessão de 30 min. |
| /case-studies/ | 91ch | Casos reais de AI e automação: resultados mensuráveis, prazos curtos, ROI comprovado. |
| /enterprise/ | 89ch | AI e automação enterprise: governança, integração, SLA. Implementação segura para grandes operações. |
| /consulting/ | 89ch | Consultoria AI e TI: roadmap, arquitetura, implementação. 26 anos de experiência em tecnologia. |
| /marketplace/ | 90ch | Marketplace de ferramentas e integrações AI/IT: automação, observabilidade, FinOps, cybersecurity. |
| /partners/ | 87ch | Programa de parceiros AI: co-venda, comissão recorrente, onboarding estruturado. |
| /ai-services/ | 81ch | Serviços de AI para empresas: strategy, integration, implementation. Comece pelo $99 Discovery. |
| /services/security/ | 77ch | Cybersecurity e AI Security: proteção operacional, compliance, resposta a incidentes. Scoped após Discovery. |
| /services/data/ | 77ch | Data Engineering e AI/Data pipelines: desde ingestão até analytics. Scoped após $99 Discovery. |
| /free-audit/ | 77ch | Free Audit — Avaliação gratuita de readiness AI/IT. Scorecard em 15 minutos. |
| /free-tools/ | 77ch | Ferramentas gratuitas de AI e TI: ROI calculator, cloud checklist, phishing analyzer. |
| /free-tools-hub/ | 110ch | Hub de ferramentas gratuitas da Zion Tech Group: readiness audit, ROI calculator, phishing analyzer, speed-to-lead. |
| /composio/ | 184ch | Zion runs 31 ACTIVE Composio toolkits discovered at runtime. HubSpot, Jira, noCRM, Perplexity, Google Workspace. |
| /privacy/ | 7ch (quase vazia) | Política de Privacidade da Zion Tech Group. Como coletamos, usamos e protegemos seus dados. |
| /industries/ | sem desc | Indústrias atendidas: fintech, saúde, logística, manufatura, varejo, energia, tecnologia. |
| /affiliate/ | 7ch | Programa de afiliados da Zion Tech Group: commission, tracking, materiais de divulgação. |
| /managed-it-services/ | 7ch | Managed IT Services com AI: monitoramento 24/7, NOC/SOC, incident response, suporte remoto e onsite. |
| /it-consulting/ | 7ch | Consultoria em TI e AI para empresas: estratégia digital, arquitetura cloud, migração, automação. |

---

### Canonical Bugs — subpáginas apontando para página-pai

| URL | Current Canonical | Should Be |
|-----|-------------------|-----------|
| /services/security/ | /services/ | /services/security/ |
| /services/data/ | /services/ | /services/data/ |
| /free-audit/ | /book/ | /free-audit/ |
| /free-tools/ | /services/ | /free-tools/ |
| /ai-services/ai-strategy-roadmap/ | /services/ | /ai-services/ai-strategy-roadmap/ |
| /ai-services/ai-integration-apis/ | /services/ | /ai-services/ai-integration-apis/ |
| /it-consulting/ | /consulting/ | /it-consulting/ |

**Fix:** Each page should have `<link rel="canonical" href="https://ziontechgroup.com<current-path>/">` — self-referencing.

---

### Pages with NO META DESCRIPTION (critical)

- /privacy/ — add description
- /industries/ — add description  
- /affiliate/ — add description
- /managed-it-services/ — add description
- /it-consulting/ — add description

---

## Priority Order
1. Fix canonical bugs (agent-dev) — affects ~7 pages
2. Fix short titles (agent-writer drafts, agent-dev applies) — affects ~15 pages
3. Fix missing/short descriptions — affects ~20 pages