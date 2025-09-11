

      return
    }
    const app: Application = {
      id: uuidv4()
      jobId: String(jobId)
      talentSlug: String(talentSlug)
      status: action === 'apply' ? 'applied' : 'skipped'
createdAtIso: now}
    apps.push(app)
    writeJsonFile<Application[]>(FILE, apps)
    res.status(201).json({ application: app })
    return
  }
  res.setHeader('AllowGET, POST')
  res.status(405).end('Method Not Allowed')
}

type Application = {
  id: string;
  jobId: string;
  talentSlug: string;
  status: 'applied' | 'skipped';
  createdAtIso: string;
};

const FILE = 'applications.json';


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
