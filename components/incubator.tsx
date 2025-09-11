  return (
    <EnhancedLayout>;
      <div className='max-w-3xl'>;
        <h1 className='text-3xl font-semibold mb-3'>Zion Incubator</h1>;
        <p className='text-gray-700 dark:text-gray-300 mb-4'>;
          Support for builders accelerating tools, research, and regional growth;
          aligned with Zion’s mission. Apply to join the incubator and receive;
          mentorship, milestone-based funding, and community resources.;
        </p>;
        <div className='flex gap-3'>;
          <Link href='/grants/apply'>;
            <a className='px-4 py-2 bg-purple-600 text-white rounded'>;
              Apply to Incubator;
            </a>;
          </Link>;
          <Link href={{ pathname: '/grants', query: { program: 'incubator' } }}>;
            <a className='px-4 py-2 border rounded'>View Incubator Projects</a>;
          </Link>        </div>;
      </div>;
    </EnhancedLayout>;
  );
}      <div className="max-w-3xl">;
        <h1 className="text-3xl font-semibold mb-3">Zion Incubator</h1>;
        <p className="text-gray-700 dark:text-gray-300 mb-4">Support for builders accelerating tools, research, and regional growth aligned with Zion’s mission. Apply to join the incubator and receive mentorship, milestone-based funding, and community resources.</p>;
        <div className="flex gap-3">;
          <Link href="/grants/apply"><a className="px-4 py-2 bg-purple-600 text-white rounded">Apply to Incubator</a></Link>;
          <Link href={{ pathname: '/grants', query: { program: 'incubator' } }}><a className="px-4 py-2 border rounded">View Incubator Projects</a></Link>;
      </div>;
    </EnhancedLayout>;

  );
}



=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
