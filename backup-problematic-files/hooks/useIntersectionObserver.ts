<<<<<<< HEAD:backup-problematic-files/hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react',
=======
import {useEffect, useRef, useState} from 'react';
>>>>>>> main:hooks/useIntersectionObserver.ts
interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
<<<<<<< HEAD:backup-problematic-files/hooks/useIntersectionObserver.ts
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
=======
  freezeOnceVisible?: boolean
}
export function useIntersectionObserver({
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
>>>>>>> main:hooks/useIntersectionObserver.ts
  };
  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, root, rootMargin };
<<<<<<< HEAD:backup-problematic-files/hooks/useIntersectionObserver.ts
    const currentObserver = new IntersectionObserver(
      updateEntry,
      observerParams
    );
    observer.current = currentObserver;
    currentObserver.observe(node);
    return () => {
      currentObserver.disconnect();
    };
=======
    const currentObserver = new IntersectionObserver(updateEntry, observerParams);
    observer.current = currentObserver;
    currentObserver.observe(node);
    return () => {
      currentObserver.disconnect()
    }
>>>>>>> main:hooks/useIntersectionObserver.ts
  }, [node, threshold, root, rootMargin, frozen]);
  const prevNode = useRef<Element | null>(null);
  useEffect(() => {
    if (prevNode.current) {
<<<<<<< HEAD:backup-problematic-files/hooks/useIntersectionObserver.ts
      observer.current?.unobserve(prevNode.current);
    }
    if (node) {
      observer.current?.observe(node);
    }
    prevNode.current = node;
  }, [node]);
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
=======
      observer.current?.unobserve(prevNode.current)
    }
    if (node) {
      observer.current?.observe(node)
    }
    prevNode.current = node
  }, [node]);
  return [setNode, entry] as const
}
>>>>>>> main:hooks/useIntersectionObserver.ts
