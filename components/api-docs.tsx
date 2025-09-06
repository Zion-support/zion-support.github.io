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



      destination: '/developers/docs',
      permanent: true}}
};




export default function ApiDocsRedirect() {
  return null;

<<<<<<< HEAD
=======
      destination: '/developers / docs',
      permanent: true,
    },
  }      permanent: true}}
}
;
export default /**
 * ApiDocsRedirect - Function description
 */
function ApiDocsRedirect() {
  return null;
}

=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
