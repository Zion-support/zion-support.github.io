import { GetServerSideProps } from 'next',

export const getServerSideProps: GetServerSideProps = async () => {,
  return {,
    redirect: {,
      destination: '/resume/preview',
      permanent: false}}
}
export default function ResumeIndex() { return null }

},
,
export default function ResumeIndex() { return null },
export const getServerSideProps: GetServerSideProps = async () => {,
  return {,
    redirect: {,
      destination: '/resume/preview',
      permanent: false}  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
},
export default function ResumeIndex() { return null   } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
,