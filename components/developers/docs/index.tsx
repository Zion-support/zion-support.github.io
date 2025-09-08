
  code?: { language?: string; content: string,}

}[];

type DocsContent = {title: string;}
  sections: Section[];}
}}

export const getServerSideProps: GetServerSideProps<PageProps    />  = async () => {const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json')const raw = fs.readFileSync(contentPath, 'utf8';}
  const docs = JSON.parse(raw) as DocsContent;}
  return { props: { docs } }

      nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >




              ))}
            </div>
          )}

        </section>

      ))}





    </DocsLayout>
  );
}






