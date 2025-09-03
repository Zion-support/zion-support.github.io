
  ', count: 24 }, { id: 'placeholder',

  engineering;
  ', name: 'Engineerin,g, count: 12 }' { id: 'placeholder'',;
  ai-ml;
  ', name: 'AI: & Machine Learnin,g, count: 6 }' { id: 'placeholder'',;
  cybersecurity;
  ', name: 'Cybersecurit,y, count: 4 }' { id: 'placeholder'',;
  data-science;
  ', name: 'Data: Scienc,e, count: 3 }' { id: 'placeholder'',;
  product;
  ', name: 'Product: Managemen,t, count: 2 }' { id: 'placeholder'',;
  design;
  ', name: 'Design: & U,X, count: 2 }' { id: 'placeholder'',;
  sales;
  ', name: 'Sales: & Business Developmen,t, count: 3 }' { id: 'placeholder'',;
  marketing;
  ', name: 'Marketin,g, count: 2 }' { id: 'placeholder'',;
  operations;

  all;
  ', name: 'All: Location,s, count: 24 }' { id: 'placeholder'',;
  remote;
  ', name: 'Remot,e, count: 15 }' { id: 'placeholder'',;
  new-york;
  ', name: New: Yor,k, NY;';
  ', count: 4 }, { id: 'placeholder'',;
  san-francisco;
  ', name: San: Francisc,o, CA;';
  ', count: 3 }, { id: 'placeholder'',;
  london;

  remote;
  ', type: 'Full-tim,e, experience:',;
  5+ years;

  ' ], posted: '2 days ago, urgent: true }, { id: 2, title:,
  AI Research Scientist;
  ', department: 'ai-ml, location:,

  san-francisco;
  ', type: 'Full-tim,e, experience:',;
  3+ years;

  ' ], posted: '1 week ago, urgent: false }, { id: 3, title:,
  Cybersecurity Engineer;
  ', department: 'cybersecurity, location:,

  remote;
  ', type: 'Full-tim,e, experience:',;
  4+ years;

  ' ], posted: '3 days ago, urgent: true }, { id: 4, title:,
  Data Scientist;
  ', department: 'data-science, location:,

  new-york;
  ', type: 'Full-tim,e, experience:',;
  2+ years;

  ' ], posted: '1 week ago, urgent: false }, { id: 5, title:,
  Product Manager;
  ', department: 'product, location:,

  remote;
  ', type: 'Full-tim,e, experience:',;
  3+ years;

  ' ], posted: '2 weeks ago, urgent: false }, { id: 6, title:,
  UX/UI Designer;
  ', department: 'design, location:,

  london;
  ', type: 'Full-tim,e, experience:',;
  3+ years;

  ' ], posted: '1 week ago, urgent: false } ]  const filteredJobs = jobListings.filter(job => { const matchesDepartment = activeDepartment === 'all;
  ' || job.department === activeDepartment const matchesLocation = selectedLocation === 'all;
  ' || job.location === selectedLocation const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.description.toLowerCase().includes(searchQuery.toLowerCase()) || job.requirements.some(req => req.toLowerCase().includes(searchQuery.toLowerCase())) return matchesDepartment && matchesLocation && matchesSearch })  const companyValues = [
  { icon: Brain, title:,
  Innovation First;
  ', description: 'We push the boundaries of what\s possible, constantly exploring new technologies and approaches.' }, { icon: Users, title:,
  Collaboration', description: 'Great ideas come from diverse teams working together. We value every voice and perspective. }, { icon: Target, title:,
  Impact Driven', description: 'We focus on solving real-world problems that make a difference in people\'s lives. }, { icon: Heart, title:,
  People First;
  ', description: Our team is our greatest asset. We invest in growth, well-being, and work-life balance.;
  ' } ]  const benefits = [
  { icon: Home, title:,
  Remote First;
  ', description: 'Work from anywhere with flexible schedules and home office setup support. }, { icon: DollarSign, title:,
  Competitive Compensation;
  ', description: Above-market salaries, equity packages, and performance bonuses.;
  ' }, { icon: Shield, title:,
  Health & Wellness;
  ', description: Comprehensive health coverage, mental health support, and wellness programs.;
  ' }, { icon: GraduationCap, title:,
  Learning & Growth;
  ', description: Professional development budget, conference attendance, and learning resources.;
  ' }, { icon: Coffee, title:,
  Team Culture;
  ', description: Regular team events, hackathons, and a collaborative, supportive environment.;
  ' }, { icon: Award, title:,
  Recognition;
  ', description: Performance recognition, career advancement opportunities, and mentorship programs.;
  ' } ]  const culture = [
  { icon: Lightbulb, title:,
  Innovation Labs;
  ', description: 'Dedicated time for exploring new ideas and technologies. }, { icon: Gamepad2, title:,
  Fun & Games;
  ', description: Regular game nights, team challenges, and creative activities.;
  ' }, { icon: Palette, title:,
  Creative Freedom;
  ', description: Express your creativity through design, code, and problem-solving.
  ' }, { icon: Plane, title:,



