import fs from 'fs';
import path from 'path';

type Props = any;
    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }

  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
};
}
