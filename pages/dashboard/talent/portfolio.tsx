




return { props: {} };
};

}





      <PdfExportButton targetRef={ref} fileName={`resume-${data.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />
      <ResumePreview ref={ref} data={data} theme={theme} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const supabase = createServerClient();
  const user = await (supabase as any).auth.getUser?.();
  if (!user) {
    return { redirect: { destination: '/auth', permanent: false } } as any
  }
  return { props: {} }
};

import PdfExportButton from '../../../components / ui / PdfExportButton';

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    return { redirect: { destination: '/auth', permanent: false } } as any;
  }
return { props: {} }
}



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
