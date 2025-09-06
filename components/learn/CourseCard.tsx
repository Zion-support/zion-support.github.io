import Link from 'next/link';

export type Course = {
  id: string;
  title: string;
  durationMinutes: number;
  level: string;
  isFree: boolean;
  category: string;
  certificationBadge: string;
  description?: string;};

export default function CourseCard({ course }: { course: Course }) {
  return (
  id: string,
  title: string,
  durationMinutes: number,
  level: string,
  isFree: boolean,
  category: string,
  certificationBadge: string,
  description?: string

};

export default function CourseCard({ course }: { course: Course }) {
  return (

        </Link>
      </div>
    </div>
  );