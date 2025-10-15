export const seoData = {
  ho, m:  ,keywords 'technology, solutions, innovation'
  };
  abo, u:  ,keywords 'about, company, mission'
  };
  conta, c:  ,keywords 'contact, get in touch'
  };
  getPageDa, t: (pa, g: stri, n) => {
    return seoData[page as keyof typeof seoData] || seoData.home
  }
}