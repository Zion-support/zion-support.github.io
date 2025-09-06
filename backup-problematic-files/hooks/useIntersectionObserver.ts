<<<<<<< HEAD
<<<<<<< HEAD

import {useEffect, useRef, useState} from 'react';

=======

import {useEffect, useRef, useState} from 'react';



=======
<<<<<<< HEAD:hooks/useIntersectionObserver.ts
<<<<<<< HEAD
=======
:hooks/useIntersectionObserver.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useEffect, useRef, useState } from 'react';
import {useEffect, useRef, useState} from 'react';
:backup-problematic-files/hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react',
import {useEffect, useRef, useState} from 'react';
<<<<<<< HEAD
>>>>>>> main:hooks/useIntersectionObserver.ts
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/hooks/useIntersectionObserver.ts
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/hooks/useIntersectionObserver.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
main:hooks/useIntersectionObserver.ts
:backup-problematic-files/hooks/useIntersectionObserver.ts
:backup-problematic-files/hooks/useIntersectionObserver.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
<<<<<<< HEAD
<<<<<<< HEAD

  freezeOnceVisible?: boolean
}

=======
<<<<<<< HEAD:backup-problematic-files/hooks/useIntersectionObserver.ts
=======
:backup-problematic-files/hooks/useIntersectionObserver.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  freezeOnceVisible?: boolean;
}
export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>(),
  const [node, setNode] = useState<Element | null>(null),
  const observer = useRef<IntersectionObserver | null>(null),
  const frozen = entry?.isIntersecting && freezeOnceVisible,
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  freezeOnceVisible?: boolean
}
export function useIntersectionObserver({

export function useIntersectionObserver({;
  threshold = 0;
  root = null;
  rootMargin = '0%';
  freezeOnceVisible = false
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const frozen = entry?.isIntersecting && freezeOnceVisible;
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
:hooks/useIntersectionObserver.ts
  }
  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport |frozen |!node) return;
    const observerParams = { threshold, root, rootMargin }
main:hooks/useIntersectionObserver.ts
  };
  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, root, rootMargin };
:backup-problematic-files/hooks/useIntersectionObserver.ts
    const currentObserver = new IntersectionObserver(
      updateEntry,
      observerParams
    );
    observer.current = currentObserver;
    currentObserver.observe(node);
    return () => {
      currentObserver.disconnect();
    };
:backup-problematic-files/hooks/useIntersectionObserver.ts
    const currentObserver = new IntersectionObserver(updateEntry, observerParams);
    observer.current = currentObserver;
    currentObserver.observe(node);
    return () => {
      currentObserver.disconnect()
    }
<<<<<<< HEAD
>>>>>>> main:hooks/useIntersectionObserver.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
main:hooks/useIntersectionObserver.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }, [node, threshold, root, rootMargin, frozen]);
  const prevNode = useRef<Element | null>(null);
  useEffect(() => {
    if (prevNode.current) {
<<<<<<< HEAD
<<<<<<< HEAD

  return [setNode, entry] as const
};

=======
<<<<<<< HEAD:backup-problematic-files/hooks/useIntersectionObserver.ts
=======
:backup-problematic-files/hooks/useIntersectionObserver.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      observer.current?.unobserve(prevNode.current);
    }
    if (node) {
      observer.current?.observe(node);
    }
    prevNode.current = node;
  }, [node]);
:hooks/useIntersectionObserver.ts

  return [setNode, entry] as const
}
  return [setNode, entry] as const
};
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return [setNode, entry] as const;
}
import { useEffect, useRef, useState } from 'react',;
interface UseIntersectionObserverProps {;
  threshold?: number,;
  root?: Element | null,;
  rootMargin?: string,;
  freezeOnceVisible?: boolean;
}
export function useIntersectionObserver({;
  threshold = 0,;
  root = null,;
  rootMargin = '0%',;
  freezeOnceVisible = false;
}: UseIntersectionObserverProps = {}) {;
  const [entry, setEntry] = useState<IntersectionObserverEntry>(),;
  const [node, setNode] = useState<Element | null>(null),;
  const observer = useRef<IntersectionObserver | null>(null),;
  const frozen = entry?.isIntersecting && freezeOnceVisible,;
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {;
    setEntry(entry);
  },;
  useEffect(() => {;
    const hasIOSupport = !!window.IntersectionObserver,;
    if (!hasIOSupport || frozen || !node) return,;
    const observerParams = { threshold, root, rootMargin },;
    const currentObserver = new IntersectionObserver(updateEntry, observerParams),;
    observer.current = currentObserver,;
    currentObserver.observe(node),;
    return () => {;
      currentObserver.disconnect();
    }
  }, [node, threshold, root, rootMargin, frozen]),;
  const prevNode = useRef<Element | null>(null);
  useEffect(() => {;
    if (prevNode.current) {;
      observer.current?.unobserve(prevNode.current);
    }
    if (node) {;
      observer.current?.observe(node);
    }
    prevNode.current = node;
  }, [node]);
  return [setNode, entry] as const;
}
      observer.current?.unobserve(prevNode.current)
    }
    if (node) {
      observer.current?.observe(node)
    }
    prevNode.current = node
  }, [node]);
  return [setNode, entry] as const
}
<<<<<<< HEAD
>>>>>>> main:hooks/useIntersectionObserver.ts
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/hooks/useIntersectionObserver.ts
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/hooks/useIntersectionObserver.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
main:hooks/useIntersectionObserver.ts
:backup-problematic-files/hooks/useIntersectionObserver.ts
:backup-problematic-files/hooks/useIntersectionObserver.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
