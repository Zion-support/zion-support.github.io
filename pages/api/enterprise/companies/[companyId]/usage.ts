import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { companyId} = req.query;
  if (!companyId || typeof companyId !== 'string') {_return res.status(400).json({ error: 'companyId required'});
  }
  const _company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({_error: 'company_not_found'});

  if (req.method === 'GET') {_return res.status(200).json(company.plan.usageLimits);}

  if (req.method === 'PATCH') {_const { monthlyJobPosts, _budgetCapUsd} = req.body || {};
    if (typeof monthlyJobPosts !== 'number' || typeof budgetCapUsd !== 'number') {_return res.status(400).json({ error: 'monthlyJobPosts and budgetCapUsd must be numbers'});
    }
    const _ok = store.setUsageLimits(companyId, monthlyJobPosts, budgetCapUsd);
    return res.status(ok ? 200 : 404).json(ok ? {_success: true} : {_error: 'company_not_found'});
  }

  return res.status(405).json({_error: 'method_not_allowed'});
}