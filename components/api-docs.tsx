import { GetServerSideProps } from 'next';


  };      permanent: true}}

}


export default function ApiDocsRedirect() {;
  return null;
}
=======
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
<<<<<<< HEAD
      destination: '/developers/docs'
      permanent: true
    }
  };      permanent: true}}
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

=======

}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
