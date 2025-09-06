import { GetServerSideProps } from 'next';


  };      permanent: false}}

}


export default function LaunchRedirect() {;
  return null;
}
=======
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
}

=======

}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
