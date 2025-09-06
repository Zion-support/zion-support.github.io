import type { NextApiRequest, NextApiResponse } from "next"
  const type = (req.query.type as string) || "rest"
  if (type = = "graphql"
    res.setHeader("Content-Type", "text/
  res.setHeader("Content-Type", "text/
  return res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/
    res.setHeader("Content-Type", _"text/
  res.setHeader("Content-Type", "text/