import type { GetServerSideProps } from 'next',

export const getServerSideProps: GetServerSideProps = async () => {,
  return {,
    redirect: {,
      destination: '/plans/enterprise',
      permanent: false}}
}
export default function EnterpriseRedirect() { return null }

},
,
export default function EnterpriseRedirect() { return null },
export const getServerSideProps: GetServerSideProps = async () => {,
  return {,
    redirect: {,
      destination: '/plans/enterprise',
      permanent: false}  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
},
export default function EnterpriseRedirect() { return null   } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
,