export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),

  const [activeProjects, setActiveProjects] = useState<Project[]>([]);

            <BriefcaseIcon className="h-5 w-5 text-primary" />"

            <span>Active Projects</span>
          
          <CardDescription>Your ongoing work
        
        <CardContent>
"
          <div className="space-y-2">"
</div>"
                className='h-16 animate-pulse bg-muted rounded'></div>            ))}
          </div>;
        ;
  }          <div className="space-y-2">;"
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>"

      <Card>;

        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;"
            <BriefcaseIcon className="h-5 w-5 text-primary" />;"

            <span>Active Projects</span>;
          <CardDescription>Your ongoing work;
        <CardContent>;
          <div className="space-y-2">;"
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>;"
      <Card>

        <CardHeader>

          <CardTitle className="flex items-center gap-2">"

          
        

          <CardTitle className='flex items-center gap-2'>;

            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>;


        ;"
        <CardContent className='text-center py-6'>;

          <p className='text-muted-foreground mb-2'>;
</p>
          </p>;
          <Button variant='outline' asChild>;

            <Link href='/jobs'>Find Opportunities                  <CardContent className="text-center py-6">;""
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" asChild>;"
            <Link href="/jobs">Find Opportunities;"
        <CardContent className="text-center py-6">"
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>"
            <Link href="/jobs">Find Opportunities"
          


        
      


          <BriefcaseIcon className='h-5 w-5 text-primary' />          <span>Active Projects</span>;

      <CardContent className='space-y-4'>  ;




        
      <CardContent className='space-y-4'>

          <div key={project.id} className='border rounded-md p-3'>
</div>
            <div className='flex justify-between items-start mb-2'>
              <h3 className='font-medium text-sm'>{project.job?.title}</h3>
              <Badge;
                variant={
                  project.status === 'in_progress' ? 'default' : 'outline
                }
                className={
                  project.status === 'in_progress
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100
                    : 
                  : 'In Progress'}
            <div className='flex items-center text-xs text-muted-foreground gap-2'>;
              <Clock className='h-3 w-3' />;

              <span>;
</span>
              </span>;
            <Button size='sm' variant='outline' className='w-full mt-2' asChild>              <Link href={`/project/${project && project.id}`}>View Project            <Button size="sm" variant="outline" className="w-full mt-2" asChild>;"
`;
              <Link href={`/project/${project && project.id}`}>View Project;
        <CardFooter>;
          <Button variant='ghost' className='w-full' asChild>;

            <Link href='/projects'>View All Projects                    <Button variant="ghost" className="w-full" asChild>;""
            <Link href="/projects">View All Projects;"
        ;`;
              <Link href={`/project/${project.id}`}>View Project
            
  const [active_projects, setActiveProjects] = useState < Project[]>([]);
  useEffect (() => {    // Check condition;
if ( {) {
  $2;
      const active = projects;"
        .filter (p => ['offer_accepted', 'in_progress'].includes (p.status));
        .slice (0, 3); // Limit to 3 most recent projects;
      setActiveProjects (active);
  }, [projects, is_loading]);
  // Check condition;
    return (


          <CardTitle className='flex items - center gap - 2'>;

            <BriefcaseIcon className='h - 5 w - 5 text - primary' />            <span > Active Projects</span>          <CardTitle className="flex items - center gap - 2">;"
            <BriefcaseIcon className="h - 5 w - 5 text - primary" />;"

            <span > Active Projects</span>;
          <CardDescription > Your ongoing work;
          <div className='space - y-2'>;
              <div;
                key={idx}
                className='h - 16 animate - pulse bg - muted rounded';')
              ></div>            ))}
      );
  }          <div className="space - y-2">;"
              <div key={idx} className="h - 16 animate - pulse bg - muted rounded"></div>))}"


            <BriefcaseIcon className='h - 5 w - 5 text - primary' />            <span > Active Projects</span>;

                  <CardTitle className="flex items - center gap - 2">;"

        <CardContent className='text - center py - 6'>;

          <p className='text - muted - foreground mb - 2'>;
          <Button variant='outline' as_child>;

            <Link href='/jobs'>Find Opportunities                  <CardContent className="text - center py - 6">;""
          <p className="text - muted - foreground mb - 2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" as_child>;"


          <BriefcaseIcon className='h - 5 w - 5 text - primary' />          <span > Active Projects</span>;

      <CardContent className='space - y-4'>;





          <div key={project.id} className='border rounded - md p - 3'>;
            <div className='flex justify - between items - start mb - 2'>;
              <h3 className='font - medium text - sm'>{project.job?.title}</h3>;
                  project.status === 'in_progress' ? 'default' : 'outline';
                  project.status === 'in_progress';
                    ? 'bg - blue - 100 text - blue - 800 hover:bg - blue - 100';
                    : ;
                }          <div key={project.id} className="border rounded - md p - 3">;"
            <div className="flex justify - between items - start mb - 2">;"
              <h3 className="font - medium text - sm">{project.job?.title}</h3>;"
              <Badge;"
                variant = {project.status === "in_progress" ? "default" : "outline", }""
                class_name = {project.status === "in_progress" ? "bg - blue - 100 text - blue - 800 hover:bg - blue - 100" : "", }"
              >;

            </div>;"
            <div className='flex items - center text - xs text - muted - foreground gap - 2'>;
              <Clock className='h - 3 w - 3' />;

            </div>;`;
            <Button size='sm' variant='outline' className='w - full mt - 2' as_child>              <Link href={`/project/${project.id}`}>View Project            <Button size="sm" variant="outline" className="w - full mt - 2" as_child>;"
              <Link href={`/project/${project.id}`}>View Project;
          </div>))}
          <Button variant="ghost" className="w-full" asChild>;"
    ;"`;