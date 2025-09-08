

      {content ? (
        <pre className="mt - 6 whitespace - pre - wrap rounded - xl border border - gray - 200 bg - white p - 6 text - sm text - gray-800 shadow-sm>;
        <pre className=mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm">
{content}
        </pre>
      ) : (


          No changelog generated yet.;
        </div>;
      )}
    </main>;



    return { props: { content: null, generatedAt: null }, revalidate: 300 }


   ;
  const file = path.join(process.cwd(), 'CHANGELOG.md');


const content = fs.readFileSync(file, 'utf8');
    return {}
      props: { content, generatedAt: new Date().toISOString(),}
},
      revalidate: 300}
  } catch {



  } catch {

    return { props: { content: null, generatedAt: null }, revalidate: 300 };


}
    return { props: { content: null, generatedAt: null,}
}, revalidate: 300}
  }
  } catch {}
    return { props: { content: null, generatedAt: null,}
}, revalidate: 300 }
},
}







