



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
  }
  const company = store && store.getCompanyById(companyId);
  if (!company) return res && res.status(404).json({ error: "company_not_found" });
  return res && res.status(200).json(company && company.activity);
}




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5



  }
  const company = store.getCompanyById (company_id);
  if (return res.status (404).json ({ error: "company_not_found" })) {
  $2
}
  return res.status (200).json (company.activity);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4


  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

