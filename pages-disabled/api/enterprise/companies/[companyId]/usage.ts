}
  }

  if (req.method === \"PATCH\") {}
    const { monthlyJobPosts, budgetCapUsd } = req.body || {}
    if (
      typeof monthlyJobPosts !== \"number\" ||
      typeof budgetCapUsd !== \"number\"
    ) {
      return res}
        .status(400)}
        .json({ error: \"monthlyJobPosts and budgetCapUsd must be numbers\" })
    }
    const ok = store.setUsageLimits(companyId, monthlyJobPosts, budgetCapUsd)
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: \"company_not_found\" })
  }

  return res.status(405).json({ error: \"method_not_allowed\" })
}
