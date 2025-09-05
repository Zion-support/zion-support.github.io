 
}const mockTalent: Talent[] = Array.from ({
  length: 47 
}) .map ( (, i) => ({
  id: String (i + 1), name: `Talent $ {
  i + 1 
}`;
title: 'Full-Stack Developer';
badges: (i % 3 === 0 ? ['Verified'] : i % 3 === 1 ? ['Pro'] : ['Top Rated']) as Talent['badges'];
<Head> <title>Talent - Zion</title> </Head> <h1 className="text-2xl font-semibold" >Explore Talent</h1>) 
}</article>) ) 
}</div> <Pagination page= {
  page 
}pageSize= {
  pageSize 
}total= {
  total 
}onChange= {
  setPage 
}/> </div>) 
};
export default TalentDirectory;
