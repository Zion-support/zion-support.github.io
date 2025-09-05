
export const getServerSideProps: GetServerSideProps = async () => {_return {
    redirect: {
      destination: '/help', _permanent: false}};
};

export default function SupportRedirect() {_return null;}