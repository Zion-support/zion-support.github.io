}
    typedefs.push(}
      `type ${typeName} { id: ID, title: String, description: String }`,
    )
  })
  return typedefs.join(\"\n\")
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(\"Content-Type\", \"text/plain\");}
  res.status(200).send(toSDL());}
}
