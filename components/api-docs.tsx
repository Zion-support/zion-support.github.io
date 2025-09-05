
export const getServerSideProps: GetServerSideProps = async () => {_return {
    redirect: {
      destination: '/developers/docs', _permanent: true}};
};

export default function ApiDocsRedirect() {_return null;}
