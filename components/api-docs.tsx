import { GetServerSideProps } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps;
=======
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
<<<<<<< HEAD
}
=======
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/developers/docs',
      permanent: true,
    },
  };
};
}

export default function ApiDocsRedirect() {
  return null;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
