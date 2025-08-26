import { GetStaticPaths, GetStaticProps } from 'next';

export default function SlugPage() {
	return null;
}

export const getStaticPaths: GetStaticPaths = async () => {
	return { paths: [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async () => {
	return { notFound: true };
};