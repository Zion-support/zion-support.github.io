import type {_GetServerSideProps} from 'next';

export const getServerSideProps: GetServerSideProps = async () => {_return {
    redirect: {
      destination: '/plans/enterprise', _permanent: false}};
};

export default function EnterpriseRedirect() {_return null;}