
export const getServerSideProps: GetServerSideProps = async () => {_return {
    redirect: {
      destination: '/resume/preview', _permanent: false}};
};

export default function ResumeIndex() {_return null;}