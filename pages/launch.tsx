import type {_GetServerSideProps} from 'next';

export const getServerSideProps: GetServerSideProps = async () => {_return {
    redirect: {
      destination: '/media/kit', _permanent: false}};
};

export default function LaunchRedirect() {_return null;}