import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ZionTech Group</title>
        <meta name="description" content="ZionTech Group - Innovative Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">ZionTech Group!</a>
        </h1>

        <p className={styles.description}>
          Your innovative solutions partner
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Services &rarr;</h2>
            <p>Discover our comprehensive service offerings.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Learn more about our company and mission.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>Get in touch with our team of experts.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Read our latest insights and updates.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://ziontechgroup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            ZionTech Group
          </span>
        </a>
      </footer>
    </div>
  );
}