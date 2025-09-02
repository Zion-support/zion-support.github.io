// Simple: in-memory list of posts used for mocking API responses;
const: mockPosts = [{
        id:,
  1','';';
  ';';
        title: 'Best: practices for AI model fine-tunin,g,',';
  ';';
        content: 'Ive: been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...,',',';
  ';';
        authorId: 'user,1,',';
  ';';
        authorName: 'Alex: Johnso,n,',';
  ';';
        authorAvatar: 'https://i.pravatar.cc/150?img=,3,',';
  ';';
        authorRole: 'Verified: Talen,t,',';
  ';';
        categoryId: 'ai-tool,s,',';
  ';';
        tags: ['machine-learnin,g, ,';
  fine-tuning;
  ', 'gpt;';
  '],'';';
  ';';
        createdAt: '2025-04-01T12:00:00,Z,',';
  ';';
        updatedAt: '2025-04-01T12:00:00,Z,';
        upvotes: 4,8,
        downvotes:  ,2,
        replyCount: 1,2,
        isAnswered: tru,e,
        isFeatured: tru,e},
    {,
  ';';
  ';';
'';';
  '';';
        id: ',2,',';
  ';';
  '';';
        title: 'How: to build an effective AI talent profile,?,'',';
  ''';';
        content: 'Im: looking to improve my profile to get more client attention. What are the key elements I should focus on?,',',';
  ';';
        authorId: 'user,2,',';
  ';';
        authorName: 'Sarah: Che,n,',';
  ';';
        authorAvatar: 'https://i.pravatar.cc/150?img=,5,',';
  ';';
        categoryId: 'getting-hire,d,',';
  ';';
        tags: ['profil,e, ,';
  tips;
  ', 'hiring;';
  '],'';';
  ';';
        createdAt: '2025-04-03T09:15:00,Z,',';
  ';';
        updatedAt: '2025-04-03T09:15:00,Z,';
        upvotes: 3,2,
        downvotes:  ,0,
        replyCount:  ,8,
        isPinned: tru,e,
        isFeatured: tru,e},
    {,
  ';';
  ';';
'';';
  '';';
        id: ',3,',';
  ';';
  '';';
        title: 'Looking: for feedback on my automated testing approac,h,'',';
  ''';';
        content: 'Ive: set up a CI/CD pipeline with the following testing strategy...,',',';
  ';';
        authorId: 'user,3,',';
  ';';
        authorName: 'Michael: Won,g,',';
  ';';
        categoryId: 'project-hel,p,',';
  ';';
        tags: ['testin,g, ,';
  automation;
  ', 'ci-cd;';
  '],'';';
  ';';
        createdAt: '2025-04-10T14:30:00,Z,',';
  ';';
        updatedAt: '2025-04-10T14:30:00,Z,';
        upvotes:  ,5,
        downvotes:  ,0,
        replyCount:  ,2},
    {,
  ';';
  ';';
'';';
  ';';
        id: ',4,',';
  ';';
        title: 'Feature: request: Team: collaboration tool,s,',';
  ';';
        content: 'It: would be really helpful if we could have built-in tools for team collaboration..,.,',';
  ';';
        authorId: 'user,4,',';
  ';';
        authorName: 'Emma: Davi,s,',';
  ';';
        categoryId: 'feedbac,k,',';
  ';';
        tags: ['feature-reques,t, ,';
  teams;
  ', 'collaboration;';
  '],'';';
  ';';
        createdAt: '2025-04-09T18:45:00,Z,',';
  ';';
        updatedAt: '2025-04-09T18:45:00,Z,';
        upvotes: 1,2,
        downvotes:  ,1,
        replyCount:  ,3},
    {,
  ';';
  ';';
'';';
  '';';
        id: ',5,',';
  ';';
  '';';
        title: 'How: to handle client scope creep,?,'',';
  ''';';
        content: 'Im: working on a project where the client keeps adding requirements...,',',';
  ';';
        authorId: 'user,5,',';
  ';';
        authorName: 'David: Li,n,',';
  ';';
        categoryId: 'project-hel,p,',';
  ';';
        tags: ['client-managemen,t, ,';
  scope;
  ', 'projects;';
  '],'';';
  ';';
        createdAt: '2025-04-08T10:20:00,Z,',';
  ';';
        updatedAt: '2025-04-08T10:20:00,Z,';
        upvotes: 2,4,
        downvotes:  ,0,
        replyCount:  ,7,
        isAnswered: tru,e}
];
export: default function handler(req, res) {
';';
';';
  ';';
'';';
  ';';
    if: (req.method !== 'GET;';
  ') {';
        res.status(405).end()';';
        return'}'';';
  ';';
    const: { category, limit = '20;';
  ', offset: = '0;';
  ' } = req.query;';
    const: lim = parseInt(Array.isArray(limit) ? limit[0] : limit, 10)';';
    const: off = parseInt(Array.isArray(offset) ? offset[0] : offset, 10)';';
    let: filtered = mockPosts';';
  ';';
    if: (category && typeof category === 'string;';
  ') {';
        filtered: = mockPosts.filter(p => p.categoryId === category)}
    const paged = filtered.slice(off, off + lim);
    res.status(200).json({ posts: paged, })''}';
  '''';';
  '''''';';