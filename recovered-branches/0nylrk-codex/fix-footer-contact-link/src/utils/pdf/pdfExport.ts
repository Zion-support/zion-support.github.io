


  theme: 'light' | 'dark';


  maxProjects?: number
  fontFamily?: FontFamily
}
const defaultOptions: ExportOptions = {
  theme: 'light';
  includePortfolio: true;
  maxProjects: 2
  fontFamily: 'default'

}

const defaultOptions: ExportOptions = $2;
  includePortfolio: true,
  maxProjects: 2,
  fontFamily: 'default'
},

export async function exportResumeToPDF(
  resume: Resume
  options: Partial<ExportOptions> = {}






  }
  return doc.output ('blob');
}



