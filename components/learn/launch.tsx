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
      destination: '/academy/founder-course'
      permanent: false
    }
  };      permanent: false}}
}
=======
      destination: '/academy/founder-course',
      permanent: false,
    },;
  };      permanent: false}}
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

export default function LaunchRedirect() {;
  return null;
<<<<<<< HEAD
}
=======
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/academy/founder-course',
      permanent: false,
    },
  };
};
}

export default function LaunchRedirect() {
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
