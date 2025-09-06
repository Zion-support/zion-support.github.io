
import Head from next / head';
;
interface SimpleLayoutProps {,
  title: string,
  description?: string,
  children: React.ReactNode;
}
export default /**
 * SimpleLayout - Function description
 */
function SimpleLayout() {,
  return (,
    <>,
      <Head>,
        <title>{title}</title>,
        {description && <meta name="description" content={description} />}
      </Head>,
<<<<<<< HEAD

      {children};
    </>)
};
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
