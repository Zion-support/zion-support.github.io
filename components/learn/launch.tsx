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



      destination: '/academy/founder-course',
      permanent: false}}
};




export default function LaunchRedirect() {
  return null;

<<<<<<< HEAD
=======
      destination: '/academy / founder - course',
      permanent: false,
    },
  }      permanent: false}}
}
;
export default /**
 * LaunchRedirect - Function description
 */
function LaunchRedirect() {
  return null;
}

=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
