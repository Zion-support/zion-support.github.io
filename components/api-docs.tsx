import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/developers/docs'
      permanent: true
    }
export const getServerSideProps: GetServerSideProps = async () => {;
  return {;
    redirect: {;
      destination: '/developers/docs',;
      permanent: true,;
    },;
  };      permanent: true}}
};

export default function ApiDocsRedirect() {;
  return null;
}
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
<<<<<<< HEAD
      destination: '/developers/docs',
      permanent: true}}
};

export default function ApiDocsRedirect() {
  return null;
}
      destination: '/developers / docs',
      permanent: true,
    },
  }      permanent: true}}
=======
<<<<<<< HEAD
      destination: '/developers/docs'
      permanent: true
    }
  };      permanent: true}}
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
=======
      destination: '/developers/docs',
      permanent: true,
    },;
  };      permanent: true}}
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

export default function ApiDocsRedirect() {;
  return null;
}
<<<<<<< HEAD
=======

=======

}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
